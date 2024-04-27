package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.*;
import com.example.demo.respository.*;


@Service
public class BankService{
    @Autowired
    private BankRepo er;
    public Bank createAccount(Bank p){
        return er.save(p);
    }

    public List<Bank> getAllAccounts(){
        return er.findAll();
    }
    public Optional<Bank> getAccountById(Integer accountId){
        return er.findById(accountId);
    }
    public boolean updateDetails(int accountId,Bank e)
    {
        if(this.getAccountById(accountId)==null)
        {
            return false;
        }
        try{
            er.save(e);
        }
        catch(Exception a)
        {
            return false;
        }
        return true;
    }
public boolean deleteAccount(int accountId)
    {
        if(this.getAccountById(accountId) == null)
        {
            return false;
        }
        er.deleteById(accountId);
        return true;
    }


}