let web3tr;
let torus;
let useraddress;


window.onload = async function() {
    if ( window.location.href.split('/').pop() == "CheckTokens.html"){
        //window.alert("CheckTokensPage");
        await newTorus();
        myurl = "https://blockscout.com/poa/xdai/address/" + useraddress[0]+"/tokens" ;
        window.window.location.href = myurl ;
    }
    if ( window.location.href.split('/').pop() == "CheckTokens2.html"){
        //window.alert("CheckTokensPage");
        await newTorus();
        enableLink( 0 );
    }
    
    
} 


async function newTorus() {

torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "mainnet", // default: mainnet
    chainId: 1, // default: 1
    networkName: "Main Ethereum Network" // default: Main Ethereum Network
  },
loginConfig: {
    'google': {
      showOnModal: false,
    },
    'facebook': {
      showOnModal: false,
    },
    'discord': {
      showOnModal: false,
    },
},
  showTorusButton: false // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = await new Web3(torus.provider);

useraddress = await web3tr.eth.getAccounts();
console.log(useraddress[0]);

}
