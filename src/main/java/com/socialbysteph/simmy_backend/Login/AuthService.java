package com.socialbysteph.simmy_backend.Login;

import com.socialbysteph.simmy_backend.Login.SIMMYUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class AuthService {
//    private List<SIMMYUser> SIMMYUsers = new ArrayList<>();

    private AuthRepository authRepository;

    @Autowired
    public AuthService(AuthRepository authRepository) {
        this.authRepository = authRepository;
    }

    public List<SIMMYUser> getUsers() {
        return authRepository.findAll();
    }

    public SIMMYUser getUserByUsername(String username) {
        SIMMYUser simmyUser = authRepository.findByUsername(username);
        if (simmyUser == null) {
            return new SIMMYUser("No SIMMYUser", "-1");
        }
        return simmyUser;
//        for (SIMMYUser SIMMYUser : SIMMYUsers) {
//            if (SIMMYUser.getUsername().equals(username)) {
//                return SIMMYUser;
//            }
//        }

    }

    public boolean registerUser(SIMMYUser SIMMYUser) {
        try {
//            this.SIMMYUsers.add(SIMMYUser);
            authRepository.save(SIMMYUser);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public List<String> getAllEmails() {
        List<String> emails = new ArrayList<>();
        List<SIMMYUser> SIMMYUsers = getUsers();
        for (SIMMYUser SIMMYUser : SIMMYUsers) {
            emails.add(SIMMYUser.getUsername());
        }
        return emails;
    }

    public SIMMYUser loginUser(SIMMYUser checkSIMMYUser) {
        List<SIMMYUser> SIMMYUsers = getUsers();
        for (SIMMYUser SIMMYUser : SIMMYUsers) {
            if (SIMMYUser.getUsername().equals(checkSIMMYUser.getUsername()) && SIMMYUser.getPassword().equals(checkSIMMYUser.getPassword())) {
                return SIMMYUser;
            }
        }
        return new SIMMYUser();
    }

    public boolean removeUser(String username) {
        boolean isRemoved = false;
        try {
            authRepository.deleteByUsername(username);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

//        Iterator<SIMMYUser> iterator = SIMMYUsers.iterator();
//        while (iterator.hasNext()) {
//            SIMMYUser SIMMYUser = iterator.next();
//            if (SIMMYUser.getUsername().equals(username)) {
//                isRemoved = true;
//                iterator.remove();
//            }
//        }
        return isRemoved;
    }
}