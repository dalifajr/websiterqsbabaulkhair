import DashboardController from './DashboardController'
import AssessmentController from './AssessmentController'
import AttendanceController from './AttendanceController'
import ReportController from './ReportController'
import NotificationController from './NotificationController'
import HelpController from './HelpController'
import Settings from './Settings'
import Admin from './Admin'
import ParentPortalController from './ParentPortalController'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
AssessmentController: Object.assign(AssessmentController, AssessmentController),
AttendanceController: Object.assign(AttendanceController, AttendanceController),
ReportController: Object.assign(ReportController, ReportController),
NotificationController: Object.assign(NotificationController, NotificationController),
HelpController: Object.assign(HelpController, HelpController),
Settings: Object.assign(Settings, Settings),
Admin: Object.assign(Admin, Admin),
ParentPortalController: Object.assign(ParentPortalController, ParentPortalController),
}

export default Controllers