import About from "../pages/About";
import lifevaultTeam from '../assets/integration.jpg';
import bgHero from "../assets/bgHero.png";
import securityImage from "../assets/Showcase.png";
import '../styles/hero.css'

function AboutUs() {
  return (
    <div className="w-full py-16 px-4" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <About />
        <div className="max-w-[1240px] mx-auto grid gap-10 items-center">
          <div className="flex flex-col justify-center">
            <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-4xl font-bold py-1">
              🔒 About LifeVault
            </p>
            <div className="flex">
              <div className="mr-5">
                <br /><br />
                <p className="text-lg text-[#000435] bg-white">
                  <span> ✅ At LifeVault, we prioritize your data privacy and security by utilizing cutting-edge encryption and blockchain technology. Your data is always encrypted and can only be accessed by you, ensuring full control and privacy.</span><br /><br />
                  <span> ✅ LifeVault is built on the principles of decentralization. Instead of relying on centralized servers, we distribute your data across a secure, decentralized storage network, significantly reducing the risk of breaches.</span><br /><br />
                  <span> ✅ Powered by Hive Blockchain, LifeVault guarantees that your data is tamper-proof and verified by a network of nodes, ensuring transparency and security in every transaction.</span><br /><br />
                </p>
                <br /><br />
              </div>
              <img className="w-[550px] rounded-lg mx-auto md:my-4" src={lifevaultTeam} alt="LifeVault Team" />
            </div>
            <p className="bg-gradient-to-r from-blue-900 via-blue-000 to-blue-900 inline-block text-transparent bg-clip-text text-4xl font-bold py-1">
              Our Mission
            </p>
            <div className="flex">
              <img className="w-[500px] rounded-lg mx-auto md:my-4" src={securityImage} alt="Data Security" />
              <div className="col-4">
                <br></br>
                <p className="text-lg m-2 text-[#000435] bg-white">
                  <span> At LifeVault, our mission is to revolutionize data ownership and control. We are committed to creating a future where individuals have full access to their data while ensuring its safety through advanced encryption and blockchain verification.</span><br /><br />
                  <span> By leveraging the power of decentralized technology, LifeVault enables a new era of data privacy and ownership, giving users unparalleled control over their digital footprint.</span><br />
                </p>
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs;