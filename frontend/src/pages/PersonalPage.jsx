import Feature from "../components/Personal/Features/Feature";
import Plans from "../components/Personal/Plans/Plans";
import Welcome from "../components/Personal/Welcome/Welcome";
import WhyPass from "../components/Personal/WhyPass/WhyPass";

function PersonalPage(){
    return <main>
        <Welcome/>
        <Feature/>
        <WhyPass/>
        <Plans/>
    </main>
}
export default PersonalPage;