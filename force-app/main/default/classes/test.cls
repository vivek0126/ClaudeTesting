public with sharing class test {
global class DynamicPicklist implements System.callable{

    global Object call(String action,Map<String,object> args){
    
    Map<String,Object> input = (Map<String,Object>) args.get('input');
    Map<String,Object> input1 = (Map<String,Object>) args.get('input1');
    
    Map<String,Object> options = (Map<String,Object>) args.get('options');
    
    Map<String,Object> output = (Map<String,Object>) args.get('output');
    
    System.debug('#hashtag#Action::'+action);
    
    System.debug('#hashtag#input::'+input);
    
    System.debug('#hashtag#options::'+options);
    
    System.debug('#hashtag#output::'+output);
    
    return invoke(action,input,output,options);
    
    }
    
    private Object invoke(string methodName,Map<String,object> input,Map<String,object> output,Map<String,object> options){
    
    if(methodName == 'getContactDetails'){
    
    List<Map<String,String>> result = getContactDetails(input,output,options);
    
    system.debug('result::'+result);
    
    return output.put('options',result); 
    
    }
    
    return null;
    
    }
    
    private List<Map<String,String>> getContactDetails(Map<String,object> input,Map<String,object> output,Map<String,object> options){
    
    List<Map<String,String>> optionDetail = New List<Map<String,String>>();
    
    List<Contact> contactList = [SELECT Id,Name FROM Contact 
    LIMIT 5];
    
    system.debug('$contactList:'+contactList);
    for(contact con:contactList){
    
    Map<String,String> optionMap = New Map<String,String>();
    optionMap.put('name', con.Id);
    optionMap.put('value', con.Name);
    optionDetail.add(optionMap);
    }
    
    return optionDetail;
    
    }
    
    }
}