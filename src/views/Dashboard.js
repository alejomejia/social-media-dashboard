// Importing from packages
import { useStoreState } from 'easy-peasy';

// Importing components
import Container from '../components/Container';
import Header from '../components/Header';
import Title from '../components/Title';
import Switch from '../components/Switch';
import Section from '../components/Section';
import Column from '../components/Column';
import BigCard from '../components/Cards/Big';
import SmallCard from '../components/Cards/Small';
import Modal from '../components/Modal';

// Importing transitions
import FadeInUp from '../components/Transitions/FadeInUp';

// Importing data
import followers from '../data/followers.json';
import overview from '../data/overview.json';

const Dashboard = () => {
  // Getting data from the json file
  const FOLLOWERS_DATA = followers.data;
  const OVERVIEW_DATA = overview;

  // Getting state from global store to open modal
  const isModalOpen = useStoreState((state) => state.isModalOpen);

  return (
    <Container>
      <Header>
        <Title>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: {followers.total}</span>
        </Title>
        <Switch label="Dark Mode" />
      </Header>
      <Section l={4} m={2} s={2} xs={1}>
        {FOLLOWERS_DATA.map((follower, idx) => {
          let delay = idx * 80;
          return (
            <Column key={follower.id}>
              <FadeInUp delay={delay}>
                <BigCard
                  social={follower.social}
                  username={follower.username}
                  followers={follower.followers}
                  type={follower.type}
                  today={follower.today}
                />
              </FadeInUp>
            </Column>
          );
        })}
      </Section>
      <Title>
        <h2>Overview - Today</h2>
      </Title>
      <Section l={4} m={2} s={2} xs={2} xxs={1}>
        {OVERVIEW_DATA.map((item, idx) => {
          let delay = idx * 80;
          return (
            <Column key={item.id}>
              <FadeInUp delay={delay}>
                <SmallCard
                  title={item.title}
                  social={item.social}
                  quantity={item.quantity}
                  type={item.type}
                  percent={item.percent}
                />
              </FadeInUp>
            </Column>
          );
        })}
      </Section>
      <Modal open={isModalOpen} />
    </Container>
  );
};

export default Dashboard;
