import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import students4fe9ea from './students'
import scores2705a1 from './scores'
/**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
export const students = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: students.url(options),
    method: 'get',
})

students.definition = {
    methods: ["get","head"],
    url: '/reports/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
students.url = (options?: RouteQueryOptions) => {
    return students.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
students.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: students.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
students.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: students.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
    const studentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: students.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
        studentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: students.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::students
 * @see app/Http/Controllers/ReportController.php:20
 * @route '/reports/students'
 */
        studentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: students.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    students.form = studentsForm
/**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
export const scores = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scores.url(options),
    method: 'get',
})

scores.definition = {
    methods: ["get","head"],
    url: '/reports/scores',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
scores.url = (options?: RouteQueryOptions) => {
    return scores.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
scores.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scores.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
scores.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scores.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
    const scoresForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: scores.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
        scoresForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: scores.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::scores
 * @see app/Http/Controllers/ReportController.php:230
 * @route '/reports/scores'
 */
        scoresForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: scores.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    scores.form = scoresForm
/**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
export const attendance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: attendance.url(options),
    method: 'get',
})

attendance.definition = {
    methods: ["get","head"],
    url: '/reports/attendance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
attendance.url = (options?: RouteQueryOptions) => {
    return attendance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
attendance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: attendance.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
attendance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: attendance.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
    const attendanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: attendance.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
        attendanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: attendance.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AttendanceController::attendance
 * @see app/Http/Controllers/AttendanceController.php:246
 * @route '/reports/attendance'
 */
        attendanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: attendance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    attendance.form = attendanceForm
const reports = {
    students: Object.assign(students, students4fe9ea),
scores: Object.assign(scores, scores2705a1),
attendance: Object.assign(attendance, attendance),
}

export default reports