//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; //potentially remove this, because we do not want to allow transfers without approval
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

contract SmartIdentity is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
	address[] devs;

    constructor() ERC721("SmartIdentity", "ID") {
	    devs[0] = 0x3Bb4404CCCf81156b692874AfFf7083CD7d73d32;
	}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function checkDevs() internal returns(bool success) {
    for (uint i = 0; i < devs.length; i++) {
          if (devs[i] == msg.sender) {
            // corresponding dev entry found - early return true
            return true;
        }
    }
    return false;
  }
  	/**
     * @dev Transfers ownership of the contract to a new account should not be possible. With explicit approval, 
	 * the internal _transferOwnership function can be called ONLY by a set of developer addresses
     * Can only be called by the current owner.
     * scope virtual to make possible changes in subcontracts
     * Overrides the transferOwnership function from OpenZeppelin
     * New return value, only storing successful ownership transferral on the blockchain
     */
    function transferOwnership(address newOwner) public virtual override{
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        require(checkDevs(), "Request a transfer from a developer if you are authorized");
    }
    
	
	function addDev(address newDev) public onlyOwner returns(bool){
        require(newDev != address(0), "Ownable: new owner is the zero address");
        require(checkDevs(), "Request an authorization from a developer if you have been granted develop privileges");
        devs[devs.length] = msg.sender;
        return true;
}
}