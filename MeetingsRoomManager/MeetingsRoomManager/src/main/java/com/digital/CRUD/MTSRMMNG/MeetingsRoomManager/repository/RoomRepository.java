package com.digital.CRUD.MTSRMMNG.MeetingsRoomManager.repository;
import com.digital.CRUD.MTSRMMNG.MeetingsRoomManager.model.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {

}
