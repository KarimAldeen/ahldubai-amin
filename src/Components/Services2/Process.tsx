import Visibale from "../../HighOrderComponent/withVisibale";

const Process = ({steps}:any) => {


  return (
    <div className='Process'>
      <h1>Your complete trip in one place</h1>
      {steps.map((step:any, index:any) => (

        <Visibale key={index}> 
          <img src={`${step?.image}`} alt="" />
          <div>
            <h1>{step.title}</h1>
            <ul>
              {step.description.map((item:any, i:any) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </Visibale>
      ))}
    </div>
  );
}

export default Process;

