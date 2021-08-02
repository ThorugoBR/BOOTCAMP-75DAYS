package com.one.innovation.digital.project.model;

import lombok.*;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
public class BancoDeHoras {
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    @Embeddable
    @Getter
    @Setter
    public class BancoHorasId implements Serializable{
        private Long idBancoHoras;
        private Long idMovimentacao;
        private Long idUsuario;
    }

    @EmbeddedId
    private BancoHorasId bancoHorasId;
    private LocalDateTime datatrabalhada;
    private BigDecimal horastrabalhadas;
    private BigDecimal saldohoras;



}
