import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import UsersListPage from '../pages/UsersListPage.jsx'
import UserDetailsPage from '../pages/UserDetailsPage.jsx'
import CreateUserPage from '../pages/CreateUserPage.jsx'
import EditUserPage from '../pages/EditUserPage.jsx'
import NotFoundPage from "../pages/NotFoundPage.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/users" element={<UsersListPage />} />
                    <Route path="/" element={<UsersListPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/users/:id" element={<UserDetailsPage />} />
                    <Route path="/users/create" element={<CreateUserPage />} />
                    <Route path="/users/:id/edit" element={<EditUserPage />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}
export default AppRouter;