import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import paths from '~/app/router/paths'
import RequireAuth from '~/app/router/RequireAuth'
import AdminServicesPage from '~/pages/AdminServicesPage'
import InterviewAddressPage from '~/pages/admission_interview/Address'
import InterviewAppealsPage from '~/pages/admission_interview/Appeals'
import InterviewApplicationsPage from '~/pages/admission_interview/Applications'
import InterviewApplicationViewPage from '~/pages/admission_interview/ApplicationView'
import InterviewGroupApplicationsPage from '~/pages/admission_interview/GroupApplications'
import InterviewGroupsPage from '~/pages/admission_interview/Groups'
import InterviewNotParticipatedPage from '~/pages/admission_interview/NotParticipated'
import InterviewPhoneNumberPage from '~/pages/admission_interview/PhoneNumber'
import InterviewStatsPage from '~/pages/admission_interview/Stats'
import LyceumApplicationsPage from '~/pages/admission_lyceum/Applications'
import LyceumApplicationViewPage from '~/pages/admission_lyceum/ApplicationView'
import LyceumStatsPage from '~/pages/admission_lyceum/Stats'
import MasterApplicationsPage from '~/pages/admission_master/Applications'
import MasterApplicationViewPage from '~/pages/admission_master/ApplicationView'
import MasterDiplomasPage from '~/pages/admission_master/Diplomas'
import MasterDiplomaViewPage from '~/pages/admission_master/DiplomaView'
import MasterStatsPage from '~/pages/admission_master/Stats'
import SecondaryApplicationsPage from '~/pages/admission_secondary/Applications'
import SecondaryApplicationViewPage from '~/pages/admission_secondary/ApplicationView'
import SecondaryDiplomasPage from '~/pages/admission_secondary/Diplomas'
import SecondaryDiplomaViewPage from '~/pages/admission_secondary/DiplomaView'
import SecondaryMessagesPage from '~/pages/admission_secondary/Messages'
import SecondaryStatsPage from '~/pages/admission_secondary/Stats'
import TechnicalAddressPage from '~/pages/admission_technical/Address'
import TechnicalApplicationsPage from '~/pages/admission_technical/Applications'
import TechnicalApplicationViewPage from '~/pages/admission_technical/ApplicationView'
import TechnicalGroupApplicationsPage from '~/pages/admission_technical/GroupApplications'
import TechnicalGroupsPage from '~/pages/admission_technical/Groups'
import TechnicalPhoneNumberPage from '~/pages/admission_technical/PhoneNumber'
import TechnicalStatsPage from '~/pages/admission_technical/Stats'
import VocationalApplicationsPage from '~/pages/admission_vocational/Applications'
import VocationalApplicationViewPage from '~/pages/admission_vocational/ApplicationView'
import VocationalStatsPage from '~/pages/admission_vocational/Stats'
import AuthenticationPage from '~/pages/auth/AuthenticationPage'
import AuthErrorPage from '~/pages/auth/AuthErrorPage'
import LoginPage from '~/pages/auth/LoginPage/Login'
import DashboardPage from '~/pages/Dashboard'
import HomePage from '~/pages/HomePage'
import NotFound from '~/pages/NotFound'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path={paths.login} />
        <Route element={<AuthenticationPage />} path={paths.oneIdSuccess} />
        <Route element={<AuthErrorPage />} path={paths.oneIdError} />
        <Route element={<NotFound />} path={paths.notFound} />

        <Route
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
          path={paths.home}
        >
          <Route index element={<AdminServicesPage />} />

          <Route element={<DashboardPage />} path={`${paths.admissionLyceum}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<LyceumApplicationsPage />} path="applications" />
            <Route element={<LyceumStatsPage />} path="stats" />
            <Route element={<LyceumApplicationViewPage />} path="applications/:id" />
          </Route>

          <Route element={<DashboardPage />} path={`${paths.admissionVocational}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<VocationalApplicationsPage />} path="applications" />
            <Route element={<VocationalStatsPage />} path="stats" />
            <Route element={<VocationalApplicationViewPage />} path="applications/:id" />
          </Route>

          <Route element={<DashboardPage />} path={`${paths.admissionMaster}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<MasterApplicationsPage />} path="applications" />
            <Route element={<MasterDiplomasPage />} path="diplomas" />
            <Route element={<MasterStatsPage />} path="stats" />
            <Route element={<MasterApplicationViewPage />} path="applications/:id" />
            <Route element={<MasterDiplomaViewPage />} path="diplomas/:id" />
          </Route>

          <Route element={<DashboardPage />} path={`${paths.admissionInterview}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<InterviewApplicationsPage />} path="applications" />
            <Route element={<InterviewGroupsPage />} path="groups" />
            <Route element={<InterviewGroupApplicationsPage />} path="groups/:groupId" />
            <Route element={<InterviewStatsPage />} path="stats" />
            <Route element={<InterviewPhoneNumberPage />} path="phone-number" />
            <Route element={<InterviewAddressPage />} path="address" />
            <Route element={<InterviewApplicationViewPage />} path="applications/:id" />
            <Route element={<InterviewAppealsPage />} path="appeals" />
            <Route element={<InterviewNotParticipatedPage />} path="not-participated" />
          </Route>

          <Route element={<DashboardPage />} path={`${paths.admissionSecondary}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<SecondaryApplicationsPage />} path="applications" />
            <Route element={<SecondaryDiplomasPage />} path="diplomas" />
            <Route element={<SecondaryApplicationViewPage />} path="applications/:id" />
            <Route element={<SecondaryDiplomaViewPage />} path="diplomas/:id" />
            <Route element={<SecondaryMessagesPage />} path="messages" />
            <Route element={<SecondaryStatsPage />} path="stats" />
          </Route>

          <Route element={<DashboardPage />} path={`${paths.admissionTechnical}/:serviceId`}>
            <Route index element={<Navigate replace to="applications" />} />
            <Route element={<TechnicalApplicationsPage />} path="applications" />
            <Route element={<TechnicalGroupsPage />} path="groups" />
            <Route element={<TechnicalGroupApplicationsPage />} path="groups/:groupId" />
            <Route element={<TechnicalStatsPage />} path="stats" />
            <Route element={<TechnicalPhoneNumberPage />} path="phone-number" />
            <Route element={<TechnicalAddressPage />} path="address" />
            <Route element={<TechnicalApplicationViewPage />} path="applications/:id" />
          </Route>

          <Route element={<Navigate replace to="/" />} path=":slug" />
        </Route>

        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
