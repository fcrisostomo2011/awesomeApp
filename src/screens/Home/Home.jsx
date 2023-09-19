import { FlatList, View } from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import styles from './Home.style'
import { Header } from '../../components'

const Home = ({setCategorySelected}) => {

  return (

    <View style={styles.container}>
      <Header title={"Categories"}></Header>
    <FlatList
  data={dataCategories}
  keyExtractor={category => category}
  renderItem={({item})=> <CategoryItem category={item} setCategorySelected={setCategorySelected}></CategoryItem> }>
    </FlatList>
</View> 
   
  )
}

export default Home

