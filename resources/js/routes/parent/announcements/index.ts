import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
export const show = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/parent/announcements/{announcement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
show.url = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { announcement: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { announcement: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    announcement: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        announcement: typeof args.announcement === 'object'
                ? args.announcement.id
                : args.announcement,
                }

    return show.definition.url
            .replace('{announcement}', parsedArgs.announcement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
show.get = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
show.head = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
    const showForm = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
        showForm.get = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ParentPortalController::show
 * @see app/Http/Controllers/ParentPortalController.php:304
 * @route '/parent/announcements/{announcement}'
 */
        showForm.head = (args: { announcement: string | number | { id: string | number } } | [announcement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const announcements = {
    show: Object.assign(show, show),
}

export default announcements