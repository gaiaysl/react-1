
import { useState } from "react"
export default function FormElements(){
    
    const genders =[
        {key:'1',value:'Erkek'},
        {key:'2',value:'Kadın'},
    ]
    const categoryList =[
        {key:1 , value:'PHP'},
        {key:2 , value:'JavaScript'},
        {key:3 , value:'HTML'},
        {key:4, value:'CSS'}
    ]
    const[name,setName]=useState("gaye")
    const[description,setDescription]=useState("açıklama alanı")
    const[gender,setGender] =useState('')
    const[categories,setCategories]=useState([2,4])
   
   
    const selectedGender = genders.find(g=>g.key === gender)
    return( 
        <div>
            <h3>İnput Örneği</h3>
            <button style={{border:'1px solid grey'}} onClick={()=>setName('emre')}>Adı değiştir</button>
            <input style={{border:'1px solid grey',borderRadius:'3px'}}  type="text" value={name} onChange={e=>setName(e.target.value)}/>{name}
            <br/>
            <h3>Textarea Örneği</h3>

            <textarea style={{border:'1px solid grey'}} value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            {description}
            
            <br />
            <h3>Select Örneği</h3>
            <select style={{border:'1px solid grey'}} value={gender} onChange={e=>setGender(e.target.value)}>
                <option value="">Seçiniz</option>
               {genders.map(gender => (
                <option value={gender.key} key={gender.key}>{gender.value}</option>
               ))}
            </select>
           <pre>{JSON.stringify(selectedGender,null,2)}</pre> 
            <br />

            <h3>Multiple Example</h3>
            <select style={{border:'1px solid grey'}} multiple={true} value={categories} onChange={e=>setCategories([...e.target.selectedOptions].map(option => +option.value))}>
                <option value="">Seçiniz</option>
               {categoryList.map(category => (
                <option value={category.key} key={category.key}>{category.value}</option>
               ))}
            </select>
           <pre>{JSON.stringify(categories,null,2)}</pre> 
            <br />

        </div>
    )
}