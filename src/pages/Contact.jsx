import React,{ Component } from 'react'
import ProjectList from '../components/ProjectList'
import { motion } from "framer-motion";
import ProjectItem from '../components/ProjectItem';
import { Widget } from '@typeform/embed-react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick =()=> {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    <motion.div 
    className="max-w-3xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      contact
      <div data-tf-live="01HKKAQX9HJR7K6BNTSMAB3BQ4"></div><script src="//embed.typeform.com/next/embed.js"></script>
      <Widget id="K7x3jbo1" className="my-form w-full h-full" />
      <div data-tf-live="01HKKAQX9HJR7K6BNTSMAB3BQ4"></div><script src="//embed.typeform.com/next/embed.js"></script>
    </motion.div>
  }
}

export default Contact;

