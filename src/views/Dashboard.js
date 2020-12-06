// Importing from packages
import { Fragment } from 'react';

// Importing components
import Container from '../components/Container';
import Header from '../components/Header';
import Title from '../components/Title';
import Switch from '../components/Switch';
import Section from '../components/Section';
import BigCard from '../components/Cards/Big';

// Importing transitions
import FadeInUp from '../components/Transitions/FadeInUp';

// Importing data
import followers from '../data/followers.json';

const Dashboard = () => {
  // Getting data from the json file
  const FOLLOWERS_DATA = followers.data;

  return (
    <Container>
      <Header>
        <Title>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: {followers.total}</span>
        </Title>
        <Switch label="Dark Mode" />
      </Header>
      <Section>
        {FOLLOWERS_DATA.map((follower, idx) => {
          let delay = idx * 80;
          return (
            <Fragment key={follower.id}>
              <FadeInUp delay={delay}>
                <BigCard
                  social={follower.social}
                  username={follower.username}
                  followers={follower.followers}
                  type={follower.type}
                  today={follower.today}
                />
              </FadeInUp>
            </Fragment>
          );
        })}
      </Section>
    </Container>
  );
};

export default Dashboard;
