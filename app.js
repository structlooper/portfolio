const App = () => {
    const [name , setName] = React.useState('name');
    return (
        <div className='container ml-5' >
            <h1>
                React hai {name}
            </h1>
            <input type='text' name='name' value={name} onChange={(e) => {setName(e.target.value)}}  />
            <br />
            <button onClick={() => {alert('this')}}  className='btn btn-primary' >Click me</button>
        </div>
            
    );
}
ReactDOM.render(<App />,document.getElementById('app'))  

