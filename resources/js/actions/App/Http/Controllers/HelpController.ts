import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/help',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HelpController::index
 * @see app/Http/Controllers/HelpController.php:9
 * @route '/help'
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
const HelpController = { index }

export default HelpController