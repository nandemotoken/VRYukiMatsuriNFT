//左から0,1,2,3,4,5。0はテスト用
nftaddressArray = [ "0x47a66daf612f69361852c28c8508e6f3a0ce533d" , "0x4e8b9C567B5C5bbdCEdD0397F29876ddBB54b973" , "0x19bDf61f38D27A1Be7d6D70Ff06Aa24c5B3f6cc1" , "0x3ac59e8603324011f044104323e6f2e1ad4d1c4a", "0x315e98b9E559eA136faEaB1e308f7A7606B5EeD0", "" ]


//画像左から1,2,3,4,5。0はテスト用のサンプルトークン
async function enableLink( _num ){
    const web3rpc = new Web3(new Web3.providers.HttpProvider("https://rpc.xdaichain.com/"))
    mycontract = await new web3rpc.eth.Contract(abi, nftaddressArray[_num]);
    console.log(useraddress[0]);
    let fromblockchain0 = await mycontract.methods.balanceOf(useraddress[0]).call();
    console.log("bug check")
    if (fromblockchain0==0){
    console.log("bug check2")
        throw new Error('I Have No Token.'+ _num );
    } else {

    let fromblockchain1 = await mycontract.methods.tokenOfOwnerByIndex(useraddress[0] , 0).call();
    console.log(fromblockchain1);
//    tmp = 2;
    document.getElementById('image'+_num).style.opacity = "100%";
    document.getElementById('link'+_num).href = `https://blockscout.com/poa/xdai/tokens/${nftaddressArray[_num]}/instance/${fromblockchain1}/token-transfers`
    }
    }

