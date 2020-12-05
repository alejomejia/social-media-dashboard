// Importing components
import Container from '../components/Container';
import Header from '../components/Header';
import Title from '../components/Title';

// Importing data
import FOLLOWERS from '../data/followers.json';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <Title>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: {FOLLOWERS.total}</span>
        </Title>
      </Header>
    </Container>
  );
};

export default Dashboard;
