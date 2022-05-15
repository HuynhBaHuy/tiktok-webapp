import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// dont required login
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
];

// required login, if not redirect to login page
const privateRoutes = [];

export { publicRoutes, privateRoutes };
