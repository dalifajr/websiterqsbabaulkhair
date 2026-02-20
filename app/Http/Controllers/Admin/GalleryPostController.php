<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GalleryPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryPostController extends Controller
{
    public function index(Request $request): Response
    {
        $query = GalleryPost::with('createdBy')
            ->orderByDesc('event_date');

        if ($search = $request->get('q')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        return Inertia::render('admin/gallery-posts/index', [
            'posts' => $query->paginate(12)->withQueryString(),
            'filters' => [
                'q' => $request->get('q'),
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/gallery-posts/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'image' => ['required', 'image', 'mimes:jpeg,jpg,png,webp', 'max:10240'],
            'event_date' => ['required', 'date'],
            'is_published' => ['boolean'],
        ]);

        $imageData = $this->compressAndConvertToBase64($request->file('image'));

        GalleryPost::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'image_path' => $imageData,
            'event_date' => $validated['event_date'],
            'is_published' => $validated['is_published'] ?? true,
            'created_by_user_id' => auth()->id(),
        ]);

        return redirect()->route('admin.gallery-posts.index')
            ->with('success', 'Dokumentasi kegiatan berhasil ditambahkan');
    }

    public function edit(GalleryPost $galleryPost): Response
    {
        return Inertia::render('admin/gallery-posts/edit', [
            'post' => $galleryPost,
        ]);
    }

    public function update(Request $request, GalleryPost $galleryPost): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'image' => ['nullable', 'image', 'mimes:jpeg,jpg,png,webp', 'max:10240'],
            'event_date' => ['required', 'date'],
            'is_published' => ['boolean'],
        ]);

        $data = [
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'event_date' => $validated['event_date'],
            'is_published' => $validated['is_published'] ?? true,
        ];

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->compressAndConvertToBase64($request->file('image'));
        }

        $galleryPost->update($data);

        return redirect()->route('admin.gallery-posts.index')
            ->with('success', 'Dokumentasi kegiatan berhasil diperbarui');
    }

    public function destroy(GalleryPost $galleryPost): RedirectResponse
    {
        $galleryPost->delete();

        return redirect()->route('admin.gallery-posts.index')
            ->with('success', 'Dokumentasi kegiatan berhasil dihapus');
    }

    /**
     * Compress image and convert to base64 data URL
     */
    private function compressAndConvertToBase64($file): string
    {
        // If GD is not available, convert directly to base64
        if (!\extension_loaded('gd')) {
            $contents = \file_get_contents($file->getPathname());
            $mime = $file->getMimeType();
            return 'data:' . $mime . ';base64,' . \base64_encode($contents);
        }

        // Get image info
        $imageInfo = \getimagesize($file->getPathname());
        $mime = $imageInfo['mime'] ?? 'image/jpeg';

        // Create image resource based on type
        $sourceImage = match ($mime) {
            'image/jpeg' => \imagecreatefromjpeg($file->getPathname()),
            'image/png' => \imagecreatefrompng($file->getPathname()),
            'image/webp' => \imagecreatefromwebp($file->getPathname()),
            default => \imagecreatefromjpeg($file->getPathname()),
        };

        if (!$sourceImage) {
            // Fallback: convert directly to base64
            $contents = \file_get_contents($file->getPathname());
            return 'data:' . $mime . ';base64,' . \base64_encode($contents);
        }

        // Get original dimensions
        $origWidth = \imagesx($sourceImage);
        $origHeight = \imagesy($sourceImage);

        // Maximum dimensions (800px for smaller base64)
        $maxWidth = 800;
        $maxHeight = 600;

        // Calculate new dimensions maintaining aspect ratio
        $ratio = min($maxWidth / $origWidth, $maxHeight / $origHeight, 1);
        $newWidth = (int) ($origWidth * $ratio);
        $newHeight = (int) ($origHeight * $ratio);

        // Create new image
        $newImage = \imagecreatetruecolor($newWidth, $newHeight);

        // Handle transparency for PNG (fill with white)
        $white = \imagecolorallocate($newImage, 255, 255, 255);
        \imagefill($newImage, 0, 0, $white);

        // Resize
        \imagecopyresampled($newImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $origWidth, $origHeight);

        // Output to buffer
        \ob_start();
        \imagejpeg($newImage, null, 70); // 70% quality for smaller size
        $imageData = \ob_get_clean();

        // Free memory
        \imagedestroy($sourceImage);
        \imagedestroy($newImage);

        return 'data:image/jpeg;base64,' . \base64_encode($imageData);
    }
}
