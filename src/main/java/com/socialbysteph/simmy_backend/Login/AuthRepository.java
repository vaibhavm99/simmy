package com.socialbysteph.simmy_backend.Login;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthRepository extends JpaRepository<SIMMYUser, String> {
    SIMMYUser findByUsername(String username);
    void deleteByUsername(String username);
}
