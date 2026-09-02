trigger AccountTrigger1 on Account (before insert, after Insert,before Update, after Update) {
   if(trigger.isInsert){
        if(trigger.isBefore){
            AccountTriggerHandler1.beforeinsertCountry(Trigger.New);
             ConstructorClass.updateacc(Trigger.New);
            examplessiri.createsiri(Trigger.new);
            AccountTriggerHandler1.preventaccount(Trigger.New);
           
            
        }else if(trigger.isAfter){
           //   AccountTriggerHandler1.beforeinsertCountry(Trigger.New);
            AccountTriggerHandler1.createRelatedOpp(Trigger.New);
            AccountTriggerHandler1.createRelatedcon(Trigger.New); 
            AccountTriggerHandler1.createRelatedSAP(Trigger.new); 
             createNoOfContacts.createcon(Trigger.new);
        }
    }
    if(trigger.isUpdate){
        if(trigger.isAfter){
             AccountTriggerHandler1.createRelatedSAP(Trigger.new, Trigger.oldMap);
           AccountTriggerHandler1.updatePhonecont(Trigger.new, Trigger.oldMap);
            AccountTriggerHandler1.updateopp(Trigger.new, Trigger.oldMap);
            AccountTriggerHandler1.overrideaddress(Trigger.new, Trigger.oldMap);
            ///if(static booelan var needtoRunOnupdate){
            //
              /*  isFuture f = new isFuture();
            system.debug('fff>'+f.runonUpdate);
            if(!f.runonUpdate) */  AccountTriggerHandler1.accountHistory(Trigger.new, Trigger.oldMap);
           // }
        }
          if(trigger.isBefore){
              //AccountTriggerHandler1.beforeinsertCountry(Trigger.New);
          }
        
    }
    
}