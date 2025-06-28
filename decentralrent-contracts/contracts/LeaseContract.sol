
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LeaseContract {
    address public landlord;
    address public tenant;
    uint public rentAmount;
    uint public deposit;
    bool public isSigned;

    constructor(address _tenant, uint _rentAmount, uint _deposit) {
        landlord = msg.sender;
        tenant = _tenant;
        rentAmount = _rentAmount;
        deposit = _deposit;
        isSigned = false;
    }

    function signLease() public payable {
        require(msg.sender == tenant, "Only tenant can sign");
        require(msg.value == rentAmount + deposit, "Incorrect payment");
        isSigned = true;
    }

    function withdraw() public {
        require(msg.sender == landlord, "Only landlord can withdraw");
        require(isSigned, "Lease not signed");
        payable(landlord).transfer(address(this).balance);
    }
}
