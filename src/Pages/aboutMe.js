import "../App.css";
import img from '../profilepic.jpeg';

function HomePage() {
  return (
    <div className="App">
    <h2>THIS is QA</h2>
        <div className='bodystext'>
            <div>
                <img src={img} alt="my picture" width="200%" />
            </div>
            <div className='text'>
                <h1>Hi, I'm Papa Kwame Ntiamoah</h1>
                <p>
                    I'm a
                    UI/UX designer, Web and Webflow developer based in Halifax, who loves clean, simple & unique design. I also enjoy crafting. I enjoy 
                    taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient codes whether 
                    HTML, CSS, .. When I'm not coding, you will find me in the gym or on the court playing some tennis.
      
                </p>
        
                <p>
                    I joined the MCDA program because 
                    I have always been fascinated by the power of data to provide insights and inform decision-making. As I gained experience working with data in my undergraduate studies or previous internships, I became more and more interested in the field of data analytics. I saw how data could be used to solve complex problems and drive
                    innovation, and I wanted to develop the advanced knowledge and skills needed to work at the forefront of this rapidly evolving field.
        
                </p>
       
            </div>
        
        </div>
        
      
    </div>
  );
}

export default HomePage;
