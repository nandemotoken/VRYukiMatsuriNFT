//左から0,1,2,3,4,5。0はテスト用
nftaddressArray = [ "0x47a66daf612f69361852c28c8508e6f3a0ce533d" , "0xcd8a958d91e2aa450db293b7e2b7180c0a5101b1" , "" , "", "", "" ]


//画像左から1,2,3,4,5。0はテスト用のサンプルトークン
async function enableLink( _num ){
    const web3rpc = new Web3(new Web3.providers.HttpProvider("https://rpc.xdaichain.com/"))
    mycontract = await new web3rpc.eth.Contract(abi, nftaddressArray[_num]);
    console.log(useraddress[0]);
    let fromblockchain0 = await mycontract.methods.balanceOf(useraddress[0]).call();
    if (fromblockchain0==0){
        return;
    }

    let fromblockchain1 = await mycontract.methods.tokenOfOwnerByIndex(useraddress[0] , 0).call();
    console.log(fromblockchain1);
//    tmp = 2;
    document.getElementById('image'+_num).style.opacity = "100%";
    document.getElementById('link'+_num).href = `https://blockscout.com/poa/xdai/tokens/${nftaddressArray[_num]}/instance/${fromblockchain1}/token-transfers`
}

