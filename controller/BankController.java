package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Bank;
import com.example.demo.service.BankService;

@RestController
@RequestMapping("/api")
public class BankController{
    @Autowired
    private BankService es;

    @PostMapping("/bank")
    public ResponseEntity<Bank> createAccount(@RequestBody Bank b){
        Bank createdAccount=es.createAccount(b);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
    }
    @GetMapping("/banks")
    public List<Bank> getAllAccounts(){
        return es.getAllAccounts();
    }

    @GetMapping("/bank/{accountId}")
    public Optional<Bank> getAccountById(@PathVariable int accountId){
        Optional<Bank> b=es.getAccountById(accountId);
        return b;
    }
    @PutMapping("/bank/{accountId}")
    public ResponseEntity<Bank> putMethod(@PathVariable("accountId") int accountId,@RequestBody Bank e)
    {
        if(es.updateDetails(accountId,e) == true)
        {
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @DeleteMapping("//{patientId}")
    public ResponseEntity<Boolean> delete(@PathVariable("accountId") int accountId)
    {
        if(es.deleteAccount(accountId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }

}