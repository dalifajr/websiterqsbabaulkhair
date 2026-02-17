import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/backup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BackupController::index
 * @see app/Http/Controllers/Admin/BackupController.php:15
 * @route '/admin/backup'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\BackupController::create
 * @see app/Http/Controllers/Admin/BackupController.php:39
 * @route '/admin/backup/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/admin/backup/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BackupController::create
 * @see app/Http/Controllers/Admin/BackupController.php:39
 * @route '/admin/backup/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BackupController::create
 * @see app/Http/Controllers/Admin/BackupController.php:39
 * @route '/admin/backup/create'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BackupController::create
 * @see app/Http/Controllers/Admin/BackupController.php:39
 * @route '/admin/backup/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BackupController::create
 * @see app/Http/Controllers/Admin/BackupController.php:39
 * @route '/admin/backup/create'
 */
        createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(options),
            method: 'post',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
export const download = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/admin/backup/download/{filename}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
download.url = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { filename: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    filename: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        filename: args.filename,
                }

    return download.definition.url
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
download.get = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
download.head = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
    const downloadForm = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
        downloadForm.get = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BackupController::download
 * @see app/Http/Controllers/Admin/BackupController.php:94
 * @route '/admin/backup/download/{filename}'
 */
        downloadForm.head = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
/**
* @see \App\Http\Controllers\Admin\BackupController::restore
 * @see app/Http/Controllers/Admin/BackupController.php:104
 * @route '/admin/backup/restore'
 */
export const restore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(options),
    method: 'post',
})

restore.definition = {
    methods: ["post"],
    url: '/admin/backup/restore',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BackupController::restore
 * @see app/Http/Controllers/Admin/BackupController.php:104
 * @route '/admin/backup/restore'
 */
restore.url = (options?: RouteQueryOptions) => {
    return restore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BackupController::restore
 * @see app/Http/Controllers/Admin/BackupController.php:104
 * @route '/admin/backup/restore'
 */
restore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BackupController::restore
 * @see app/Http/Controllers/Admin/BackupController.php:104
 * @route '/admin/backup/restore'
 */
    const restoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: restore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BackupController::restore
 * @see app/Http/Controllers/Admin/BackupController.php:104
 * @route '/admin/backup/restore'
 */
        restoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: restore.url(options),
            method: 'post',
        })
    
    restore.form = restoreForm
/**
* @see \App\Http\Controllers\Admin\BackupController::destroy
 * @see app/Http/Controllers/Admin/BackupController.php:128
 * @route '/admin/backup/{filename}'
 */
export const destroy = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/backup/{filename}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BackupController::destroy
 * @see app/Http/Controllers/Admin/BackupController.php:128
 * @route '/admin/backup/{filename}'
 */
destroy.url = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { filename: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    filename: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        filename: args.filename,
                }

    return destroy.definition.url
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BackupController::destroy
 * @see app/Http/Controllers/Admin/BackupController.php:128
 * @route '/admin/backup/{filename}'
 */
destroy.delete = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\BackupController::destroy
 * @see app/Http/Controllers/Admin/BackupController.php:128
 * @route '/admin/backup/{filename}'
 */
    const destroyForm = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BackupController::destroy
 * @see app/Http/Controllers/Admin/BackupController.php:128
 * @route '/admin/backup/{filename}'
 */
        destroyForm.delete = (args: { filename: string | number } | [filename: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const BackupController = { index, create, download, restore, destroy }

export default BackupController