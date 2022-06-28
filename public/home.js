function Home(){
  
  const [isLoggedIn, setIsLoggedIn]= React.useState(false);
  const ctx= React.useContext(UserContext);
  console.log('ctx.isLoggedIn from home', ctx.isLoggedIn);
  return (
    <> 
     
   <NavBar />
    
    <Card
      bgcolor = "primary"
      txtcolor="black"
      header="Welcome to The Bad Bank"
      title="You can navigate through by using the above navigation."
      text="Proceed to your banking experience through this web app, where you can open an account, and then deposit and withdraw funds from your account."
      body={(<img src="img/bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    </>
  );  
}


