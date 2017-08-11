package br.com.knowledge.platform.modelo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "usuario")
public class Usuario extends BaseEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7394858398943280639L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idUsuario;
	@NotBlank
	@Column(name = "primeiroNome")
	private String primeiroNome;
	@NotBlank
	@Column(name = "sobrenome")
	private String sobrenome;
	@OneToOne
	@JoinColumn(name = "idProfissao")
	private Profissao profissao;
	@NotBlank
	@Column(name = "senha")
	private String senha;
	@NotBlank
	@Column(nullable = false)
	private String email;

	public Usuario(String primeiroNome, String sobrenome, Profissao profissao, String senha, String email) {
		super();
		this.primeiroNome = primeiroNome;
		this.sobrenome = sobrenome;
		this.profissao = profissao;
		this.senha = senha;
		this.email = email;
	}

	public Usuario() {
		super();
	}

	/**
	 * @return the idUsuario
	 */
	public Integer getIdUsuario() {
		return idUsuario;
	}

	/**
	 * @param idUsuario
	 *            the idUsuario to set
	 */
	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	/**
	 * @return the primeiroNome
	 */
	public String getPrimeiroNome() {
		return primeiroNome;
	}

	/**
	 * @param primeiroNome
	 *            the primeiroNome to set
	 */
	public void setPrimeiroNome(String primeiroNome) {
		this.primeiroNome = primeiroNome;
	}

	/**
	 * @return the sobrenome
	 */
	public String getSobrenome() {
		return sobrenome;
	}

	/**
	 * @param sobrenome
	 *            the sobrenome to set
	 */
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	/**
	 * @return the profissao
	 */
	public Profissao getProfissao() {
		return profissao;
	}

	/**
	 * @param profissao
	 *            the profissao to set
	 */
	public void setProfissao(Profissao profissao) {
		this.profissao = profissao;
	}

	/**
	 * @return the senha
	 */
	public String getSenha() {
		return senha;
	}

	/**
	 * @param senha
	 *            the senha to set
	 */
	public void setSenha(String senha) {
		this.senha = senha;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email
	 *            the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	public String getNomeCompleto() {
		return this.primeiroNome + " " + this.sobrenome;
	}

}
