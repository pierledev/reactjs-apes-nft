import { Container, TeamImagesSlider } from '@components';

const Team = () => {
  return (
    <section className='pt-10' id='team'>
      <Container className='grid xl:gap-14'>
        <h2>OUR TEAM</h2>
        <TeamImagesSlider />
      </Container>
    </section>
  );
};

export default Team;
