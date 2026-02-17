import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::update
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:148
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
export const update = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/extracurricular-enrollments/{enrollment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::update
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:148
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
update.url = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enrollment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enrollment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enrollment: typeof args.enrollment === 'object'
                ? args.enrollment.id
                : args.enrollment,
                }

    return update.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::update
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:148
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
update.put = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ExtracurricularController::update
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:148
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
    const updateForm = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExtracurricularController::update
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:148
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
        updateForm.put = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::destroy
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:160
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
export const destroy = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/extracurricular-enrollments/{enrollment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::destroy
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:160
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
destroy.url = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enrollment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enrollment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enrollment: typeof args.enrollment === 'object'
                ? args.enrollment.id
                : args.enrollment,
                }

    return destroy.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExtracurricularController::destroy
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:160
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
destroy.delete = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ExtracurricularController::destroy
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:160
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
    const destroyForm = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExtracurricularController::destroy
 * @see app/Http/Controllers/Admin/ExtracurricularController.php:160
 * @route '/admin/extracurricular-enrollments/{enrollment}'
 */
        destroyForm.delete = (args: { enrollment: string | number | { id: string | number } } | [enrollment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const extracurricularEnrollments = {
    update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default extracurricularEnrollments