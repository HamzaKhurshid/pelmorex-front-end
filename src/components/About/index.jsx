import { Typography, Avatar, Divider, Anchor } from 'antd';
import { ResumeRow, ResumeColumn } from '../../styles';
import ResumePhoto from './assets/ResumePhoto.png';

const { Title } = Typography;
const { Link } = Anchor;

const About = () => {
  return (
    <div>
      <ResumeRow>
        <Avatar style={{ boxShadow: '10px 5px 20px grey' }} size={200} src={ResumePhoto} />
        <ResumeColumn>
          <Title style={{ margin: 0, marginBottom: 20 }}>Hamza Khurshid Butt</Title>
          <Title style={{ margin: 0, marginBottom: 10 }} level={5}>hamza.khurshid96@gmail.com</Title>
          <Title style={{ margin: 0, marginBottom: 10 }} level={5}>+92322-8093981</Title>
          <Title style={{ margin: 0 }} level={5}>Pakistan, Punjab, Lahore</Title>
        </ResumeColumn>
      </ResumeRow>
      <Divider style={{ border: '1px solid #1990FF' }}></Divider>

      <ResumeRow>
        <ResumeColumn>
          <Title style={{ margin: 0, marginBottom: 20 }} level={2}>Core Skills</Title>
          <Title style={{ margin: 0 }} level={5}>• ReactJS</Title>
          <Title style={{ margin: 0 }} level={5}>• NodeJS (Express.JS)</Title>
          <Title style={{ margin: 0 }} level={5}>• Apollo GraphQL</Title>
          <Title style={{ margin: 0 }} level={5}>• Redux</Title>
          <Title style={{ margin: 0 }} level={5}>• NoSQL (MongoDB)</Title>
          <Title style={{ margin: 0 }} level={5}>• SQL (MySQL, PostgreSQL)</Title>
          <Title style={{ margin: 0 }} level={5}>• Tailwind CSS</Title>
          <Title style={{ margin: 0 }} level={5}>• AWS (S3, Lambda functions, EC2)</Title>
          <Title style={{ margin: 0 }} level={5}>• REST/RESTful APIs</Title>
          <Title style={{ margin: 0 }} level={5}>• Docker</Title>
          <Title style={{ margin: 0 }} level={5}>• JIRA</Title>
          <Title style={{ margin: 0 }} level={5}>• GitHub</Title>
        </ResumeColumn>
      </ResumeRow>
      <Divider style={{ border: '1px solid #1990FF' }}></Divider>

      <ResumeRow>
        <ResumeColumn>
          <Title style={{ margin: 0, marginBottom: 20 }} level={2}>Work Experience</Title>
          <Title style={{ margin: 0 }} level={5}>• Software Engineer at Mailmunch (March 2021 - Present)</Title>
          <Title style={{ margin: 0 }} level={5}>• MERN Stack Developer at Qbatch (March 2019 – March 2021)</Title>
          <Title style={{ margin: 0 }} level={5}>• ASP.NET Developer at Matrix Solutions (2.25 Month Internship)</Title>
        </ResumeColumn>
      </ResumeRow>
      <Divider style={{ border: '1px solid #1990FF' }}></Divider>

      <ResumeRow>
        <ResumeColumn>
          <Title style={{ margin: 0, marginBottom: 20 }} level={2}>Social Links</Title>
          <Title style={{ margin: 0 }} level={5}>
            <Anchor>
              <Link href="https://www.linkedin.com/in/hamzakhurshidbutt/" title="https://www.linkedin.com/in/hamzakhurshidbutt/" />
            </Anchor>
            </Title>
          <Title style={{ margin: 0 }} level={5}>
            <Anchor>
              <Link href="https://github.com/HamzaKhurshid" title="https://github.com/HamzaKhurshid" />
            </Anchor>
          </Title>
        </ResumeColumn>
      </ResumeRow>
    </div>
  );
};

export default About;