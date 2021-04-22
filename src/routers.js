import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import apply from './pages/apply'

const routes = [
{
	path:'/Blog',
    component:home
},
{
	path:'/Blog/home',
	name:'home',
    component:home
},
{
    path:'/Blog/about',
    name:'about',
    component:about
},
{
    path:'/Blog/archive',
    name:'archive',
    component:archive
},
{
    path:'/Blog/tag/:name',
    name:'tag',
    component:archive
},
{
    path:'/Blog/article',
    name:'article',
    component:article
},
{
    path:'/Blog/apply',
    name:'apply',
    component:apply
},
{
    path:'*',
    redirect:'/Blog'
}
]
export default routes;
