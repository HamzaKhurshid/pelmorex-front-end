import { Avatar, Divider, Anchor } from 'antd';
import { ResumeRow, ResumeColumn } from '../../styles';
import ResumePhoto from './assets/ResumePhoto.png';

const { Link } = Anchor;
const LineBreaker = () => <Divider style={{ border: '1px solid #1990FF' }}></Divider>;

const About = () => {
  return (
    <div>
      <ResumeRow>
        <Avatar style={{ boxShadow: '10px 5px 20px grey' }} size={200} src={ResumePhoto} />
        <ResumeColumn>
          <h1>Hamza Khurshid Butt</h1>
          <div>hamza.khurshid96@gmail.com</div>
          <div>+92322-8093981</div>
          <div>Pakistan, Punjab, Lahore</div>
        </ResumeColumn>
      </ResumeRow>
      <LineBreaker />

      <ResumeRow>
        <ResumeColumn>
          <h1>Core Skills</h1>
          <div>• ReactJS</div>
          <div>• NodeJS (Express.JS)</div>
          <div>• Apollo GraphQL</div>
          <div>• Redux</div>
          <div>• NoSQL (MongoDB)</div>
          <div>• SQL (MySQL, PostgreSQL)</div>
          <div>• Tailwind CSS</div>
          <div>• AWS (S3, Lambda functions, EC2)</div>
          <div>• REST/RESTful APIs</div>
          <div>• Docker</div>
          <div>• JIRA</div>
          <div>• GitHub</div>
        </ResumeColumn>
      </ResumeRow>
      <LineBreaker />

      <ResumeRow>
        <ResumeColumn>
          <h1>Work Experience</h1>
          <div>• Software Engineer at Mailmunch (March 2021 - Present)</div>
          <div>• MERN Stack Developer at Qbatch (March 2019 – March 2021)</div>
          <div>• ASP.NET Developer at Matrix Solutions (2.25 Month Internship)</div>
        </ResumeColumn>
      </ResumeRow>
      <LineBreaker />

      <ResumeRow>
        <ResumeColumn>
          <h1>Social Links</h1>
          <Anchor>
            <Link href="https://www.linkedin.com/in/hamzakhurshidbutt/" title="https://www.linkedin.com/in/hamzakhurshidbutt/" />
          </Anchor>
          <Anchor>
            <Link href="https://github.com/HamzaKhurshid" title="https://github.com/HamzaKhurshid" />
          </Anchor>
        </ResumeColumn>
      </ResumeRow>
    </div>
  );
};

export default About;