import React from 'react'
import Parallax from 'react-springy-parallax'

class SpringComponent extends React.Component {
    render() {

        const styles = {
            fontWeight: 900,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
<Parallax ref="parallax" pages={4}>
    <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#101619' }} />
    <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#243B4A' }} />
    <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />
    <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
    <div className="stars"></div>
    <Parallax.Layer
        offset={0}
        speed={0.5}
        style={styles}
        onClick={() => this.refs.parallax.scrollTo(1)}>
        <div className="outerMost">
        <div className="secondDiv">
        <div className="thirdDiv">
          <div className="content">
            <h1>Tyler Furby | Software & Design</h1>
            <br></br><p>An aspiring software engineer from <span style={{color: '#F9FF68'}}>Denver</span>, Colorado. I have worked on many projects, ranging from <span style={{color: '#21FF90'}}>artificial</span> intelligence, <span style={{color: '#FF598A'}}>augmented</span> reality, mobile <span style={{color: '#9743E0'}}>applications</span>, and web <span style={{color: '#FF598A'}}>development</span>. Behind every <span style={{color: '#F9FF68'}}>project</span>, lies a very strong foundation built upon <span style={{color: '#21FF90'}}>passion</span>, dedication, and a sure touch of <span style={{color: '#9743E0'}}>creativity</span>.</p>
            <br></br><p>If there's <span style={{color: '#9743E0'}}>one</span> thing I learned throughout this <span style={{color: '#FF598A'}}>incredible</span> journey, it is the ability to help the <span style={{color: '#F9FF68'}}>lives</span> of those around me. It is through the <span style={{color: '#21FF90'}}>power</span> of technology that has, and will <span style={{color: '#21FF90'}}>always</span>, push the human race <span style={{color: '#FF598A'}}>forward</span>.</p>
            <br></br><p>It is <span style={{color: '#9743E0'}}>time</span> now, to push <span style={{color: '#21FF90'}}>through</span> the boundaries of the <span style={{color: '#F9FF68'}}>unknown</span>, and to <span style={{color: '#FF598A'}}>discover</span> the full potential <span style={{color: '#9743E0'}}>technology</span> has on the human race. I am, and <span style={{color: '#F9FF68'}}>always</span> will be commited to doing <span style={{color: '#FF598A'}}>great</span> things.</p>
          </div>
        </div>
        </div>
        </div>
    </Parallax.Layer>
    <Parallax.Layer
        offset={1}
        speed={-0.1}
        style={styles}
        onClick={() => this.refs.parallax.scrollTo(2)}>
    </Parallax.Layer>
    <Parallax.Layer
        offset={2}
        speed={-0.1}
        style={styles}
        onClick={() => this.refs.parallax.scrollTo(3)}>
        <h1>Under Construction</h1>
    </Parallax.Layer>
    <Parallax.Layer
        offset={3}
        speed={0.5}
        style={styles}
        onClick={() => this.refs.parallax.scrollTo(0)}>
        <span><h1>Still Under Construction.</h1></span>
    </Parallax.Layer>
</Parallax>
);
}
}

SpringComponent.defaultProps = {
};

export default SpringComponent;
