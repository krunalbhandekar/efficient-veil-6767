import React, { useEffect,useState,useRef} from 'react'
import axios from 'axios';
import { Box ,Input,Text,Flex,Heading} from '@chakra-ui/react'
import "./Searchbar.css"
import { useThrottle } from "use-throttle";

const Searchbar = ({onChange,suggestions}) => {
     const [inputtext, setinputtext] = useState('')
   
    const throttletext=useThrottle(inputtext,1000)

     useEffect(() => {
      onChange(throttletext)
    }, [throttletext,onChange])

     const handleinputchange=(e)=>{
            setinputtext(e.target.value)
    }
    console.log("suggestions",suggestions)
  
  return (
    <div className='searchBar'>

        <Flex backgroundColor="white" width="650px" borderRadius="5px">
            <Input type="search" placeholder='Search essentials, groceries, and more ...' border="none" outline="none" color="black" fontWeight="600" value={inputtext} onChange={handleinputchange}/>
          </Flex>

          { suggestions.length >0 && (
          <Box className='abc' >
            {suggestions.map((item)=>{
            return ( <div key={item.id} className="searchmap">
              
              <div style={{width:"30px", height:"30px"}}>
                <img src={item.image} style={{width:"100%"}}></img>
              </div>
              <a href={item.category}>
                <p>{item.name}</p>
              </a>
             
            </div>)
        })}
          </Box>
        )}
    </div>
  )
}

export default Searchbar
