import React from 'react'
import { Box ,Image,Heading} from '@chakra-ui/react'
import Carousel from '../Crousel/Crausel'
import ItemCard from '../itemcard/ItemCard';
import { sliderone,advertise,advertise1,topcate,cashback,womenbottom,womenhead,dryfruit,adbw,hotdeal,kids,mensb,mensh,boottom,daily,household,offergroc} from '../helper/images';
import styles from "./landing.module.css"

const Head = ({ children })=> {
  return (
    <Heading fontSize="xl" py="5" marginLeft="55px">
      {children}
    </Heading>
  );
};

const Landingpage = () => {

  
  return (
    <Box>
      <Carousel cards={sliderone}/>

      {advertise.map((e,index)=>(
        <Box px="3" py="2" key={index} >
          <Image width="100%" src={e}/>
        </Box>
      ))}

      <Head >Shop from Top Categories</Head>

       <div className={styles.topcate}>
      {topcate.map((e,index)=>(
        <div className={styles.topcatediv}>
          <a href={e.link}> <img src={e.cat} className={styles.topcateimg}/></a>
       
        </div>
        ))}
      </div>

      {advertise1.map((e,index)=>(
        <Box px="3" py="2" key={index} >
          <Image width="100%" src={e}/>
        </Box>
      ))}

      <Carousel cards={cashback}/>

      <Head >Offers on daily essentials</Head>

      <div className={styles.itemcardd}>
        {daily.map((e)=>(
          <ItemCard color={"#efd6da"} offer={e.offer} url={e.url} item={e.item} itemUrl={e.itemUrl}/>
        ))}
      </div>

      <Head >Women's Fashion</Head>


        <div className={styles.womenh}>
      {womenhead.map((e,index)=>(
        <div className={styles.womenhdiv}>
          <a href={e.link}><img src={e.cat} className={styles.womenhimg}/></a>
        
        </div>
        ))}
      </div>

       <div className={styles.womenb}>
      {womenbottom.map((e,index)=>(
        <div className={styles.womenbdiv}>
          <a href={e.link}> <img src={e.cat} className={styles.womenbimg}/></a>
        </div>
        ))}
      </div>

      <div className={styles.addbw}>
      {adbw.map((e,index)=>(
        <div className={styles.addbwdiv}>
        <img src={e} className={styles.adbwimg}/>
        </div>
        ))}
      </div>

      <Head >Offers on Household & Personal care</Head>


      <div className={styles.itemcardd}>
        {household.map((e)=>(
          <ItemCard color={"#c5f8c0"} offer={e.offer} url={e.url} item={e.item} itemUrl={e.itemUrl}/>
        ))}
      </div>

      <div className={styles.addbw}>
      {dryfruit.map((e,index)=>(
        <div className={styles.addbwdiv}>
        <img src={e} className={styles.adbwimg}/>
        </div>
        ))}
      </div>

      <Head >Offers on Groceries</Head>

       <div className={styles.itemcardd}>
        {offergroc.map((e)=>(
          <ItemCard color={"#bce1fe"} offer={e.offer} url={e.url} item={e.item} itemUrl={e.itemUrl}/>
        ))}
      </div>


      <Head >Hottest Deals</Head>

         <div className={styles.hotd}>
      {hotdeal.map((e,index)=>(
        <div className={styles.hotdiv}>
          <a href={e.link}> <img src={e.cat} className={styles.womenbimg}/></a>
        </div>
        ))}
      </div>

      <Head >Kid's Fashion</Head>

       <div className={styles.womenb}>
      {kids.map((e,index)=>(
        <div className={styles.womenbdiv}>
          <a href={e.link}><img src={e.cat} className={styles.womenbimg}/></a>
        </div>
        ))}
      </div>

      <Head >Men's Fashion</Head>

         <div className={styles.womenh}>
      {mensh.map((e,index)=>(
        <div className={styles.womenhdiv}>
          <a href={e.link}> <img src={e.cat} className={styles.womenhimg}/></a>
        </div>
        ))}
      </div>

       <div className={styles.womenb}>
      {mensb.map((e,index)=>(
        <div className={styles.womenbdiv}>
          <a href={e.link}> <img src={e.cat} className={styles.womenbimg}/></a>
        </div>
        ))}
      </div>

      <div className={styles.addbw}>
      {boottom.map((e,index)=>(
        <div className={styles.addbwdiv}>
        <img src={e} className={styles.adbwimg}/>
        </div>
        ))}
      </div>

    </Box>
  )
}

export default Landingpage