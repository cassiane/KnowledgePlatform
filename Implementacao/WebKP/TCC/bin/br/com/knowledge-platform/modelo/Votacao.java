package br.com.knowl.platform.modelo;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "votacao")
public class Votacao extends BaseEntity implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 664352597319721445L;	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idVotacao")
	private long idVotacao;
	@Column(name = "qtdVotos")
	private int qtdVotos;
	@ManyToMany	
	Usuario usuario;
	@OneToOne
	@JoinColumn(name = "idAssuntoGeral")
	AssuntoGeral assuntoGeral;
	
	
	
	
}