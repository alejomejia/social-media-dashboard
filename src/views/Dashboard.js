// Importing components
import Container from '../components/Container';
import Title from '../components/Title';

// Importing data
import FOLLOWERS from '../data/followers.json';

const Dashboard = () => {
  return (
    <Container>
      <Title>
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: {FOLLOWERS.total}</span>
      </Title>
    </Container>
  );
};

export default Dashboard;
