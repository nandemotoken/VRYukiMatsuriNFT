//左から0,1,2,3,4,5。0はテスト用
nftaddressArray = [ "0x47a66daf612f69361852c28c8508e6f3a0ce533d" , "0x4e8b9C567B5C5bbdCEdD0397F29876ddBB54b973" , "0x19bDf61f38D27A1Be7d6D70Ff06Aa24c5B3f6cc1" , "0x3ac59e8603324011f044104323e6f2e1ad4d1c4a", "0xE5f1B4b7F0D7d584776a3e87EDb45112F38AAA10", "0x0c0b08054C65afE35978aBabd16e90E98e976BaC" , "0xf8920BbD3AC060024DCF429AF03E32eAe67A2500" , "0xE07301E46201406c8a55215c10855F61f261C0cd" , "0x0A9748e7B2817CBd8aDfBF3fdF42517183d938b4" , "0x30996e20E5Bfb2Bfd4ab22522eFA4be9997D37aB" , "0x4767834DE5FFB7a81FDDc11C9b1B22A13b385175" , "0xB5c397DE1EE3A1ffcC1ABe223386Bf7b2e146aCa" ,
"0x3D75D95D09443291a0205CDd76b9aEe2693b151E" , "0x82F576721D83B7a5830f7c54C8362FD72C1907aD" , "0x1ECE8144D93e2bBF12E0100ba6D8e99cD0C5131C"]


//画像左から1,2,3,4,5。0はテスト用のサンプルトークン
async function enableLink( _num ){
    const web3rpc = new Web3(new Web3.providers.HttpProvider("https://rpc.xdaichain.com/"))
    mycontract = await new web3rpc.eth.Contract(abi, nftaddressArray[_num]);
    console.log(useraddress[0]);
    let fromblockchain0 = await mycontract.methods.balanceOf(useraddress[0]).call();
 //   console.log("bug check")
    if (fromblockchain0==0){
        return;
        //    console.log("bug check2")
        //        throw new Error('I Have No Token.'+ _num );
    } else {

    let fromblockchain1 = await mycontract.methods.tokenOfOwnerByIndex(useraddress[0] , 0).call();
    console.log(fromblockchain1);
//    tmp = 2;
    document.getElementById('image'+_num).style.opacity = "100%";
    document.getElementById('link'+_num).href = `https://blockscout.com/poa/xdai/tokens/${nftaddressArray[_num]}/instance/${fromblockchain1}/token-transfers`
    }
    }

