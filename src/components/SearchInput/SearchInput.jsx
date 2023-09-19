import { Pressable,  Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'

const SearchInput = ({onSearch}) => {
    const [value, setValue] = useState('')
    
    const search = () => {
        onSearch(value)
    }

    const clearInput = () =>{
        setValue('')
        onSearch('')
    }



  return (
    <View>
      <TextInput 
         style = {styles.input}
         value={value}
         onChangeText={setValue}
         placeholder='Search Product'
         ></TextInput>
         <Pressable onPress={search}>
            <AntDesign name='search1' size={25} color={'black'}>

            </AntDesign>
         </Pressable>

         <Pressable onPress={clearInput}>
            <AntDesign name='closecircleo' size={25} color={'black'}>
                
            </AntDesign>
         </Pressable>
    </View>
  )
}

export default SearchInput

