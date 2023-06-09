using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class UserData
{
    
    public User User { get; set; }
    public List<User> Users{ get; set; }
}

[System.Serializable]
public class User
{
    public User(string username)
    {
        this.username = username;
    }
    public int id_user { get; set; }
    public string username { get; set; }
    public int level { get; set; }
    public string password { get; set; }
}

