import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/kkm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\KkmController::index
 * @see app/Http/Controllers/Admin/KkmController.php:16
 * @route '/admin/kkm'
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
* @see \App\Http\Controllers\Admin\KkmController::store
 * @see app/Http/Controllers/Admin/KkmController.php:49
 * @route '/admin/kkm'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/kkm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KkmController::store
 * @see app/Http/Controllers/Admin/KkmController.php:49
 * @route '/admin/kkm'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KkmController::store
 * @see app/Http/Controllers/Admin/KkmController.php:49
 * @route '/admin/kkm'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\KkmController::store
 * @see app/Http/Controllers/Admin/KkmController.php:49
 * @route '/admin/kkm'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\KkmController::store
 * @see app/Http/Controllers/Admin/KkmController.php:49
 * @route '/admin/kkm'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\KkmController::bulkStore
 * @see app/Http/Controllers/Admin/KkmController.php:70
 * @route '/admin/kkm/bulk'
 */
export const bulkStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/admin/kkm/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KkmController::bulkStore
 * @see app/Http/Controllers/Admin/KkmController.php:70
 * @route '/admin/kkm/bulk'
 */
bulkStore.url = (options?: RouteQueryOptions) => {
    return bulkStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KkmController::bulkStore
 * @see app/Http/Controllers/Admin/KkmController.php:70
 * @route '/admin/kkm/bulk'
 */
bulkStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\KkmController::bulkStore
 * @see app/Http/Controllers/Admin/KkmController.php:70
 * @route '/admin/kkm/bulk'
 */
    const bulkStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkStore.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\KkmController::bulkStore
 * @see app/Http/Controllers/Admin/KkmController.php:70
 * @route '/admin/kkm/bulk'
 */
        bulkStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkStore.url(options),
            method: 'post',
        })
    
    bulkStore.form = bulkStoreForm
const kkm = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
bulkStore: Object.assign(bulkStore, bulkStore),
}

export default kkm