import React from 'react'
import First from '../../Components/Info/body_Left/First'
import {  Input } from 'antd'
import { PhoneFilled, UserOutlined } from '@ant-design/icons'
import { Affix, Button } from 'antd';

const Info = () => {
    
    return (
        <>
  <h1>Scrollytelling with position: sticky</h1>
  <section>
    <figure>
      <p>A sticky item</p>
    </figure>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum
        tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac
        posuere faucibus. Mauris lectus neque, pretium non volutpat eget,
        vestibulum at magna. In sollicitudin augue nunc, non bibendum augue
        ornare quis.
      </p>
      <p>
        Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet
        dapibus efficitur.
      </p>
      <p>
        Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In
        facilisis convallis ante sit amet consequat. Aenean a lorem mollis,
        bibendum nibh nec, maximus orci. Nulla facilisi.
      </p>
    </article>
  </section>
</>


    )
}

export default Info