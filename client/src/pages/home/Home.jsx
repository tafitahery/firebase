import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
}
