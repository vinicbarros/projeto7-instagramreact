import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

export default function Content() {
    return (
        <section id="content">
            <Stories />
            <Posts />
            <Sidebar />
        </section>
    );
}