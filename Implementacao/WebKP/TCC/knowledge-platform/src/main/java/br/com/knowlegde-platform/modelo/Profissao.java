package br.com.knowl.platform.modelo;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Profissao extends BaseEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5044588346222526337L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idProfissao")
	private long idProfissao;
	@NotNull
	@Column(name = "descricao")
	private String descricao;

	public Profissao(String descricao) {
		super();
		this.descricao = descricao;
	}

	/**
	 * @return the idProfissao
	 */
	public long getIdProfissao() {
		return idProfissao;
	}

	/**
	 * @param idProfissao
	 *            the idProfissao to set
	 */
	public void setIdProfissao(long idProfissao) {
		this.idProfissao = idProfissao;
	}

	/**
	 * @return the descricao
	 */
	public String getDescricao() {
		return descricao;
	}

	/**
	 * @param descricao
	 *            the descricao to set
	 */
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
