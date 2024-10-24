import { Blog } from "../compenents/blog.jsx";
import { Heading } from "../compenents/heading.jsx";
import { Navbar } from "../compenents/navbar.jsx";

export default function Feed() {
  return (
    <>
    <Navbar></Navbar>
    <div className="m-2 p-3  "> 
      <Blog authername={"Darshan"} publishdate={"2 NOV"} title={"JAVA vs Javascript key difference in boath the languages "} content={"lorem ashfjsdf  jhf sf werghjgdsdtyil; sfh sfshf kshfk sf skhfjdshfjshfsdhf ksjf hsdfh"}></Blog>
    
    <Blog authername={"Gayatri"} publishdate={"1 NOV"} title={"NEEt 2025 study plan for students "} content={"Creating an effective study plan for NEET 2025 requires strategic planning, consistent effort, and a focus on understanding the core subjects: Physics, Chemistry, and Biology. Here's a detailed approach"}></Blog>
    
    <Blog authername={"Prakhar"} publishdate={"1 NOV"} title={" the languages "} content={"lorem ashfjsdf  jhf sf  sfh sfshf kshfcvbnbvcxsdg']poiuytrdxc vnmkk sf skhfjdshfjshfsdhf ksjf hsdfh"}></Blog>
    <Blog authername={"Sid"} publishdate={"1 NOV"} title={"JAVA vs Javascript key difference in boath the languages "} content={"lsdfghjijuhgforem ashfjsdf hi muf sf sfij name is d arshan ;ldsfoewhf  and ho3hwo are yoiue i am   dfghjkl;.,mhf sf  sfh sfshf kshfk sf skhfjdshfjshfsdhf ksjf hsdfh"}></Blog>
    
    <Blog authername={"Sid"} publishdate={"1 NOV"} title={"JAVA vs Javascript key difference in boath the languages "} content={"lsdfghjijuhgforem ashfjsdf hi muf sf sfij name is d arshan ;ldsfoewhf  and ho3hwo are yoiue i am   dfghjkl;.,mhf sf  sfh sfshf kshfk sf skhfjdshfjshfsdhf ksjf hsdfh"}></Blog></div>
    
    
    </>
  
  );
}
